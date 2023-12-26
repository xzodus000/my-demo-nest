export interface CreateTodoDto {
  title: string;
  description: string;
  status: string;
  createDate: Date;
  updateDate: Date;
}

export interface UpdateTodoDto {
  title: string;
  description: string;
  status: string;
  updateDate: Date;
}
