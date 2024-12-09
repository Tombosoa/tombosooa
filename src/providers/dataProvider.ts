import { userProvider } from "./userProvider";
import { TTrosaDataProvider } from "@/lib/type";
import {
  DeleteManyParams,
  DeleteManyResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  Identifier,
  DataProvider as RaDataProvider,
  RaRecord,
  UpdateManyParams,
  UpdateManyResult,
} from "react-admin";

const getProvider = (resourceType: string): TTrosaDataProvider => {
  if (resourceType === "users") return userProvider;

  throw new Error("Unexpected resourceType: " + resourceType);
};

const dataProvider: RaDataProvider = {
  async getList(resourceType, { pagination, sort, filter }) {
    const result = await getProvider(resourceType).getList(
      pagination?.page?? - 1,
      pagination?.perPage,
      filter,
      sort,
    );
    return {
      data: result,
      total: result.length,
      pageInfo: { hasNextPage: true, hasPreviousPage: true },
    };
  },
  async getOne(resourceType: string, params: any) {
    const result = await getProvider(resourceType).getOne(
      params.id,
      params.meta,
    );
    return { data: result };
  },
  async update(resourceType: string, params: any) {
    const result = await getProvider(resourceType).saveOrUpdate([params.data], {
      isUpdate: true,
    });
    return { data: result[0] };
  },
  async create(resourceType: string, params: any) {
    console.log(resourceType, getProvider(resourceType));
    const result = await getProvider(resourceType).saveOrUpdate([params.data]);
    return { data: result[0] };
  },
  async delete(resourceType: string, params: any) {
    const result = await getProvider(resourceType).delete(params.id);
    return { data: result };
  },
  async getMany(resourceType) {
    const result = await getProvider(resourceType).getList(0, 10);
    return { data: result };
  },
  getManyReference: function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: GetManyReferenceParams,
  ): Promise<GetManyReferenceResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  updateMany: function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: UpdateManyParams<any>,
  ): Promise<UpdateManyResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
  deleteMany: function <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: DeleteManyParams<RecordType>,
  ): Promise<DeleteManyResult<RecordType>> {
    throw new Error("Function not implemented.");
  },
};

export default dataProvider;
