export interface IArticle {
  Id: number;
  Title: string;
  Content: string;
  PublicApproved: boolean;
  CoverImageURL: string;
}

interface ContentItem {
  id: string;
  text?: string;
  image?: any;
}

export class Article implements IArticle {
  Id: number;

  PerformerID: number;

  Title: string;

  Content: string;

  PublicApproved: boolean;

  CoverImageURL: string;

  constructor(json?: any) {
    this.Id = json.Id || '';
    this.PerformerID = json.PerformerID || '';
    this.Title = json.Title || '';
    this.Content = json.Content || '';
    this.PublicApproved = json.PublicApproved || false;
    this.CoverImageURL = json.CoverImageURL || '';
  }

  public get ContentItems(): ContentItem[] {
    try {
      const json = JSON.parse(this.Content);
      return json;
    } catch (error) {
      return [];
    }
  }

  public get Description(): string {
    return this.ContentItems.map(c => c.text || '').join(' ');
  }

  public get ThumbnailUrl(): string {
    return `${process.env.REACT_APP_API_URL}/api/image?id=${this.CoverImageURL}&quality=0`;
  }

  public get MainUrl(): string {
    return `${process.env.REACT_APP_API_URL}/api/image?id=${this.CoverImageURL}&quality=100`;
  }
}
