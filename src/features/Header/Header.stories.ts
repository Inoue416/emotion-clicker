import Header from "$/features/Header/Header.sveltemport type { NaviItem } from '$/types/NaviItem';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
    menu: {
      control: {
        type: 'object',
      },
    },
  },
};

const Template = ({ title, menu }: { title: string; menu: NaviItem[] }) => ({
  Component: Header,
  props: { title, menu },
});

export const Default = Template.bind({});
Default.args = {
  title: 'My Website',
  menu: [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ],
};
