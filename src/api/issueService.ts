import axios from 'axios';
import { headers } from '../constants/api/headers'
import { IIssues } from '../types/issues';

export interface IErrorMessage {
    data: {
      error: {
        message: string;
      }
    };
}

class IssueService {
  async getIssueInfo(repo: string, name: string): Promise<IIssues[] | void> {
    try {
      const { data } = await axios.get<IIssues[]>(`https://api.github.com/repos/${repo}/${name}/issues`, {
        params: {state: 'all'},
        headers
      })

      return data
    }
    catch (error) {
      const errorMessage = error as IErrorMessage
      throw new Error(errorMessage.data.error.message)
    }
  }
}


export default new IssueService()