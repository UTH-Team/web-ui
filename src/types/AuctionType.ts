export interface Auction {
    id: string;
    itemName: string;
    startingPrice: number;
    currentBid: number;
    quickBuyPrice?: number | null; // Optional quickBuyPrice
    startTime: string; // Or Date, depending on your backend
    endTime: string; // Or Date
    currentBidder?: string | null;
    active: boolean;
    finalPrice?: number | null;
    winner?: string | null;
}