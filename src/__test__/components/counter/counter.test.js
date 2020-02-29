import {configure} from 'enzyme';
// import enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});
import React from 'react';
import {shallow,mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Counter from './../../../components/counter/counter'

describe('<App/>' ,()=>{
    it('if this tag for up exisit',()=>{
        let test = shallow(<Counter/>);
        expect(test.find('.down_clicker').exists()).toBeTruthy()
    })
    it('if this tag for down exisit',()=>{
        let test = shallow(<Counter/>);
        expect(test.find('.up_clicker').exists()).toBeTruthy()
    })
    it('sumilate change for down',()=>{
        let test = mount(<Counter/>)
        let number = parseInt(test.find('.result').text())
        let output = test.find('.down_clicker')
        output.simulate('click')
        expect(test.state('stuff')).toBeFalsy();
        expect(parseInt(test.find('.result').text())<number).toBeTruthy()
    })
    it('sumilate change up',()=>{
        let test = mount(<Counter/>)
        let number = parseInt(test.find('.result').text())
        let output = test.find('.up_clicker')
        output.simulate('click')
        expect(test.state('stuff')).toBeFalsy();
        expect(parseInt(test.find('.result').text())>number).toBeTruthy()
    })
    it('render correctly',()=>{
        const tree = renderer.create(<Counter/>).toJSON()
        expect(tree).toMatchSnapshot();
    })
});
