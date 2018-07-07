import { Image } from "./image";
import { Document } from "./document";

export class Item{
    id: number;
    onderwerp: string;
    teaser: string;
    body: string;
    createdate: Date;
    createdby: string;
    images: Image[];
    documents: Document[];
    tags: string[];
}