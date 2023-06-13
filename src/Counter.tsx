import { useSelector } from "react-redux";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Increment,Decrement } from "./store/action";

const CounterApp = () => {
    const value = useSelector((state:any)=>state.changeTheNumber)
    const dispatch = useDispatch()

    return <>
        <Container>
            <Heading>Increment/Decrement with React-Redux</Heading>
            <Wrapper>
                <Button onClick={()=>dispatch(Decrement())}>-</Button>
                <H4>{value}</H4>
                <Button onClick={()=>dispatch(Increment())}>+</Button>
            </Wrapper>
        </Container>
    </>;
}

export default CounterApp;

const Container = styled.div`
    width : 1200px;
    margin : auto;
    height : 100vh;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
`

const Heading = styled.h1`
    font-size : 30px;
`

const Wrapper = styled.div`
    display : flex;
    align-items : center;
`

const Button = styled.button`
    padding : 0px 10px;
    font-size : 20px;
    cursor : pointer;
`

const H4 = styled.h4`
    padding-inline : 10px;
    font-size : 20px;
`