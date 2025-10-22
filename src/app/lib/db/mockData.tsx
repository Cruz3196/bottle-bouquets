// creating a mock data file to simulate database data
interface CardData {
    id: string;
    title: string; 
    imageUrl: string;
}

// array of mock data objects
export const mockData: CardData[] = [
    {
        id: '1',
        title: 'Elegant Rose Bouquet',
        imageUrl: 'https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg',
    },
    {
        id: '2',
        title: 'Sunflower Delight',
        imageUrl: 'https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg',
    },
    {
        id: '3',
        title: 'Mixed Floral Arrangement',
        imageUrl: 'https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg',
    },
    {
        id: '4',
        title: 'Mixed Floral Arrangement',
        imageUrl: 'https://www.shutterstock.com/image-vector/missing-picture-page-website-design-600nw-1552421075.jpg',
    }
];
