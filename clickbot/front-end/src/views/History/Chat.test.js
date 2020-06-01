import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import { mount } from 'enzyme'
import Chat from './Chat';


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Chat match={{params: {id: "1"}, isExact: true, path: "/chats/:id", name: "Chat details"}}/>
    </MemoryRouter>
  );
  expect(wrapper.containsMatchingElement(<strong>Samppa Nori</strong>)).toEqual(true)
  wrapper.unmount()
});
