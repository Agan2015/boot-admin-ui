import BaseRequest from "./base";
import { Dict, DictQuery } from "./model/dict_model";
import { Page, Result } from "./model/domain";
enum API {
  BASE_URL = "/api/v3/system/dict",
  page = "/list/page",
  list = "/list",
  save = "/save",
  update = "/update/:id",
  delete = "/delete/:id",
  deleteBatch = "/delete"
}
class DictAPI extends BaseRequest {
  getBaseUrl(): String {
    return API.BASE_URL;
  }
  getPage(query?: DictQuery): Promise<Result<Page<Dict[]>>> {
    return this.post<Result<Page<Dict[]>>>(API.page, query);
  }
  getList(query?: DictQuery): Promise<Result<Dict[]>> {
    return this.post<Result<Dict[]>>(API.list, query);
  }
  save(vo: Dict): Promise<Result<string>> {
    return this.post<Result<string>>(API.save, vo);
  }
  updateById(id: string, vo: Dict): Promise<Result<string>> {
    return this.put<Result<string>>(API.update.replace(":id", id), vo);
  }
  deleteById(id: string): Promise<Result<string>> {
    return this.delete(API.delete.replace(":id", id));
  }
  deleteBatch(ids: string[]): Promise<Result<string>> {
    return this.post<Result<string>>(API.deleteBatch, ids);
  }
}

export const dictApi = new DictAPI();
