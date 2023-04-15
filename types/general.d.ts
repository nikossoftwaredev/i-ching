export interface WikiArticle {
  title: string;
  path: string;
  contents: {
    section: string;
    sectionContent: string;
  }[];
}

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export interface HeaderConfig {
  field: string;
  name: string;
}

export interface RowConfig {
  id: number;
  [key: string]: any;
}
