export class DataHelper {
  data: any[];
  loading: boolean;
  error: boolean;
  success: boolean

  constructor(data: any[] = [], loading: boolean = false, error: boolean = false, success: boolean = false
  ) {
    this.data = data;
    this.loading = loading;
    this.error = error;
    this.success = success;
  }

  init() {
    return { data: this.data, loading: this.loading, error: this.error, sucess: this.success };
  }

  loadSuccess(data: any) {
    return { data: data, loading: false, error: false, sucess: true };
  }

  loadingData() {
    return { data: [], loading: true, error: false, sucess: false };
  }

  fail() {
    return { data: [], loading: false, error: true, sucess: false };
  }

}