interface Source {
    id: string | null;
    name: string;
  }

export interface Payload {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }

  export interface ActionType {
    type: 'FETCH_REQUEST' | 'FETCH_RESPONSE' | 'FETCH_ERROR';
    payload?: Payload[] | unknown;
  }

  export interface StateType {
    isLoading: boolean;
    data: Payload[] | unknown;
    error?: unknown | null;
  }
  
  export interface SidebarItems {
      title: string;
      path: string;
      icon?: any;
      notification?: number;
      iconOpened?: any;
      iconClosed?: any;
      subnav?: SidebarItems[];
  }
  
