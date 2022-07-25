import { PersonDTO } from "./personDTO";

export class ClientDTO {
    id!: number;
    companyName!: string;
    websiteURI!: string;
    phoneNumber!: string;
    streetAddress!: string;
    city!: string;
    state!: string;
    zipCode!: string;
    contacts!: PersonDTO[];
}