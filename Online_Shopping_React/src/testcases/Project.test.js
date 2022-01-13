import { render, screen, fireEvent } from '@testing-library/react';
import Project from './Project';

test("welcome team component",()=>{
    render(<Project/>)
    fireEvent.click(screen.getByText("View Project Name"))
    screen.findAllByAltText("Online Shopping").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText("View Product Id"))
    screen.findAllByAltText("111").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText("View Product Name"))
    screen.findAllByAltText("Book").then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
    fireEvent.click(screen.getByText("View Product Price"))
    screen.findAllByAltText(200.99).then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })

    fireEvent.click(screen.getByText("View Product Quantity"))
    screen.findAllByAltText(9).then((e)=>{
        console.log(e)
        expect(e).toBeInTheDocument()
    })
})

