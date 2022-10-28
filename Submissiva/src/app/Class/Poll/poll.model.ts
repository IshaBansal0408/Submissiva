import { Idea } from 'src/app/Class/Idea/idea.model';
export class Poll {
  id!: string;
  category!: string;
  pollItem1!: Idea;
  pollItem2!: Idea;
  pollVotes1!: number;
  pollVotes2!: number;
  pollStartAt!: string;
  pollEndAt!: string;
  isActive!: boolean;
  pollWinner!: string;
  vote1Active!: boolean;
  vote2Active!: boolean;
}
