import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  font-family: 'Roboto';
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
  @media screen and (min-width: 577px) {
    flex-direction: row;
  }
`
export const PageHeaderMobile = styled.h1`
  display: none;
  color: #35469c;
  font-size: 20px;
  font-weight: Bold;
  @media screen and (max-width: 576px) {
    display: block;
  }
`
export const PageHeaderDesktop = styled.h1`
  display: none;
  color: #35469c;
  font-size: 24px;
  font-weight: Bold;
  @media screen and (min-width: 576px) {
    display: block;
  }
`
export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 576px) {
    order: 2;
  }
  @media screen and (min-width: 577px) {
    order: 1;
  }
`
export const Label = styled.label`
  color: #5a7184;
  font-size: 16px;
`
export const Input = styled.input`
  color: #5a7184;
  outline: none;
  padding: 5px;
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  border-color: #d7dfe9;
  background-color: #ffffff;
`
export const Button = styled.button`
  color: #ffffff;
  background-color: #0b69ff;
  border-style: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  width: 200px;
`
export const MemeContainer = styled.div`
  background-image: url(${props => props.bgImg});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  height: 250px;
  @media screen and (max-width: 576px) {
    order: 1;
  }
  @media screen and (min-width: 577px) {
    order: 2;
  }
`
export const MemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
`
