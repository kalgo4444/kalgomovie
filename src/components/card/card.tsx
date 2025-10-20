import { IMovie } from '@/shared/interface/movie.interface';
import Title, { ITitle } from '../title/title';
import CardItem from './card-item/card-item';
import CardItemLoading from './card-item/card-item-loading';

interface IProps {
  movie: IMovie[] | undefined;
  title?: ITitle;
  isLoading?: boolean;
}

export default function Card(props: IProps) {
  const { movie, title, isLoading } = props;
  return (
    <div className="mt-5">
      {title && (
        <Title title={title?.title} label={title?.label} link={title?.link} />
      )}
      {isLoading ? <CardItemLoading /> : <CardItem movie={movie} />}
    </div>
  );
}
