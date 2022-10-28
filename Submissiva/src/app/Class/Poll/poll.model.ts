import { Idea } from 'src/app/Class/Idea/idea.model';
export class Poll {
  pollItem1!: Idea;
  pollItem2!: Idea;
  pollVotes1!: number;
  pollVotes2!: number;
  pollStartAt!: string;
  pollEndAt!: string;
  pollWinner!: Idea;
}
