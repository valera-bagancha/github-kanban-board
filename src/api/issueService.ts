import axios from 'axios';


class IssueService {
  async getIssueInfo(repo: string, name: string): Promise<any> {
    try {
      const { data } = await axios.get<any>(`https://api.github.com/repos/${repo}/${name}/issues`, {
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })

      return data
    }
    catch (error) {
      console.log(error);
    }
  }
}


export default new IssueService()