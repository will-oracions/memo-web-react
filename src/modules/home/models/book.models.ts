export interface Book {
  name: string;
  slug: string;
  slug2: string;
  chaptersCount: number;
}

export interface Chapter {
  name: string;
  slug: string;
  book: Book;
  versesCount: number;
}

export interface Verse {
  content: string;
  slug: string;
  chapter: Chapter;
  book: Book;
}

export interface BibleJsonFile {
  name: string;
  slug: string;
  chapters: number;
  verses: {
    [key: number]: {
      [key: number]: string;
    };
  };
}
