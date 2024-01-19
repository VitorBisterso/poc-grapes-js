import BOX from './box'
import CARD from './card'
import CUSTOMBUTTON from './button'
import WHOLEPAGE from './wholePage';
import WRAPPER from './wrapper';

const AllComponents: Record<string, (props: any) => React.ReactElement> = {
   BOX,
   CARD,
   CUSTOMBUTTON,
   WHOLEPAGE,
   WRAPPER,
}

export default AllComponents