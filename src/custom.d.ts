
type RecordItem = {
    type: string;
    amount: number;
    notes: string;
    tags: string[];
    createdAt?:Date;
  }
  type Tag = {
    id: string;
    name: string;
  };
  type tagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => "duplicated" | "success";
    update: (id: string, name: string) => "success" | "no-found" | "duplicated";
    remove: (id: string) => boolean;
    save: () => void;
  }


 
