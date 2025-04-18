export interface Question {
  id: string;
  title: string;
  answer: {
    text: string;
    example: string;
  };
}

export interface Chapter {
  id: string;
  title: string;
  questions: Question[];
}

export interface Book {
  chapters: Chapter[];
}
