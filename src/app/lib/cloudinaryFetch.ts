// lib/cloudinaryFetch.ts
import cloudinary from "../utils/cloudinary";

interface Product {
  id: string;
  title: string;
  imageUrl: string;
}

interface CloudinaryResource {
  asset_id: string;
  public_id: string;
  secure_url: string;
}

interface FetchOptions {
  tags?: string[];
  maxResults?: number;
}

export async function fetchCloudinaryImages(
  options: FetchOptions = {}
): Promise<Product[]> {
  try {
    const { tags = [], maxResults = 50 } = options;

    let expression = "folder:BottleBouquets";

    if (tags.length > 0) {
      const tagExpression = tags.map((tag) => `tags:${tag}`).join(" OR ");
      expression += ` AND (${tagExpression})`;
    }

    const results = await cloudinary.search
      .expression(expression)
      .sort_by("created_at", "desc")
      .max_results(maxResults)
      .execute();

    console.log(
      `Found ${results.resources.length} images with tags: ${tags.join(", ")}`
    );

    const formatted: Product[] = results.resources.map(
      (file: CloudinaryResource) => ({
        id: file.asset_id,
        title: file.public_id.split("/").pop() || "Untitled",
        imageUrl: file.secure_url,
      })
    );

    return formatted;
  } catch (error) {
    console.error("Error fetching Cloudinary images:", error);
    return [];
  }
}
