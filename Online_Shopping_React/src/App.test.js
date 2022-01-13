import { act } from 'react-dom/test-utils'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-dom/test-utils';
import TestApp from './testcases/Testfunc';


describe("test for app", () => {
    let container;
    it("testing app", () => {
        container = document.createElement('div')
        document.body.appendChild(container)

        act(() => {

        })
        ReactDOM.render( < TestApp/> , container)

        const button = container.querySelector('button')
            //  const inputcontrol = container.querySelector('input')
        const inputcontrol = document.getElementById('mytext')

        inputcontrol.value = "hello user!!"
        ReactTestUtils.Simulate.change(inputcontrol)

        act(() => {
            inputcontrol.value = "hello user!!"
            ReactTestUtils.Simulate.change(inputcontrol)
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
        })
        const label = container.querySelector('p')
        expect(label.textContent).toBe("hello user!!")
    })
})