export interface QuoteSpanish {
    id:            number;
    originator:    Originator;
    language_code: string;
    content:       string;
    url:           string;
    tags:          string[];
}

export interface Originator {
    id:            number;
    language_code: string;
    description:   string;
    master_id:     number;
    name:          string;
    url:           string;
}
