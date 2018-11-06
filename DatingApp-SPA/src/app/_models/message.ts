export interface Message {
    id: number;
    senderId: number;
    senderKnwnAS: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnownAS: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}
