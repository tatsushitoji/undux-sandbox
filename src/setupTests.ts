import { configure } from 'enzyme';
import * as EnzymeAdapter from 'enzyme-adapter-react-16/';

const anyEnzymeAdapter: any = EnzymeAdapter;
configure({ adapter: new anyEnzymeAdapter() });
