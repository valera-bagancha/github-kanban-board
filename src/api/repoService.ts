import axios from 'axios';
import { headers } from '../constants/api/headers'
import { IRepo } from '../types/repo';

class RepoService {
  async getRepoInfo(repo: string, name: string, introStr: string): Promise<IRepo | void> {
    try {
      const { data } = await axios.get<IRepo>(`${introStr}//api.github.com/repos/${repo}/${name}`, {
        headers
      })

      return data
    }
    catch (error) {
      console.log(error);
    }
  }
}


export default new RepoService()