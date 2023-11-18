import {render , screen , cleanup} from '@testing-library/react'
import Todo from '../todo'

test('should render non completed todo' , () => {
    const todo = 
        { id : 1 , title : "wash dishes" , completed : false}
   
    
    render(<Todo todo ={todo} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('wash dishes')
    expect(todoElement).not.toContainHTML('<strike>')

})




test('should render  completed todo' , () => {
    const todo = 
        { id : 2 , title : "make dinner" , completed : true}
    
    render(<Todo todo ={todo} />);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('make dinner')

})