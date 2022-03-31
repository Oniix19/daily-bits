import styled from "styled-components"

export const StyleD = styled.body` 
    .body{
        background-color: #16161A;
        font-family: roboto;
        max-width: 380px; 
        max-height: 620px;
        height: 620px;
        color: white;
    }




    .NavBar{
        background-color: #232E35;
        display: flex;
        justify-content: space-between;
    }
    .NavBtn{
        background-color: transparent;
        width:100px;
        height: auto;
        margin: 0 10px;
        padding: 0;
        color: white;
        border: 0;
    }
    .NavBtn:focus{
        color: #2CB67D;
    }
    .icon{
        margin-top: 5px;
        font-size: 205%;
    }

    .NavP{
        margin: 0 0 5px 0;
    }





    .login{
        max-height: 564px;
        height: 564px;
        text-align: center;
    }
    .LoginImg{
        margin: 5% 37.5%;
        width:25%
    }
    .loginBtnG{
        background-color: #EF4565;
        width:90%;
        height: 9%;
        border: none;
        border-radius: 5px;
        color: white;
        font-size: 120%;
        font-family: roboto;
    }
    .loginDiv{
        margin: 5%;
        border: solid #94A1B2;
        border-width: 3px 0 0 0;
        padding: 3% 0;
        height: 30%;
    }
    .loginLabel{
        display: flex;
    }
    .loginInput{
        width: 98%;
        height: 25%;
        margin: 5% 0;
        border: none;
        border-radius: 5px;
        font-size: 100%;
        font-family: roboto;
    }
    .loginRest{
        color: #2CB67D;
        text-decoration: underline;
    }
    .loginReg{
        color: #2CB67D;
    }




    .estadisticas{
        max-height: 564px;
        height: 564px;
    }
    .estH2{
        margin: 5%;
        padding-top: 5%;
    }   
    .estSel{
        background-color: transparent;
        margin: 0 5% 5% 5%;
        border: none;
        color: white;
        font-size: 100%;
    }
    .estOption{
        background-color: transparent;
    }
    .estDiv{
        margin: 0 5% 5% 5%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: solid white 1px;
        border-radius: 5px;
    }
    .estImg{
        color: #72757E;
        padding: 0 10px;
        font-size: 120%;
    }
    .estResp1{
        padding: 0 10px;
    }
    .estResp2{
        padding: 0 10px;
    }
    .estResp3{
        padding: 0 10px;
        color: #2CB67D;
    }
    .estResp4{
        padding: 0 10px;
        color: #EF4565;
    }




    .perfil{
        max-height: 564px;
        height: 564px;
    }
    .perfH2{
        margin: 5%;
        padding-top: 5%;
    }
    .perfDiv{
        text-align: center;
    }
    .perfImg{
        margin: 5% 37.5%;
        width:25%;
        border-radius: 20px;
    }   
    .perfH4{
        margin: 0 ;
        padding: 0;
    }
    .perfLogOut{
        color: #EF4565;
    }



    .home{
        max-height: 564px;
        height: 564px;
    }
    .homeH3{
        text-align: center;
        padding: 2% 5%;
    }
    .homeImg{
        width: 80px;
        height: 80px;
        border-radius: 200px;
    }
    .homeDiv{
        display: flex;
        justify-content: center;
        margin: 5% 10%;
    }
    .homeDivCont{
        margin: 0 10px;
        width: 120px;
        text-align: center;
    }
    progress{
        width: 100px;
    }
    .homeP{
        padding: 0;
        margin: 0;
    }   




    .questionario{
        background-color: aqua;
        height: 100%;
    }
    .question{
        display: flex;
        align-items: center;
        
    }
    .quesImg{
        width: 30%;
        margin: 0 5%;
    }

    .quesForm{
        background-color: green;
    }
    .quesDiv{
        background-color: greenyellow;
    }
    .quesH1{
        background-color: blue;
    }
    .quesDivResp{
        background-color: blueviolet;
        height:50px;
        border: solid grey 5px;
    }
    .quesBtn{
        background-color: #7F5AF0;
        width: 90%;
        height: 3rem;
        margin: 5%;
        border: none;
        border-radius: 15px;
        color:  white;
        font-family: roboto;
        font-size: 15px;
        /* &:hover{
        background-color: #732d91;
        }
        &:focus{
        outline: none;
        background-color: #5e3370;
        } */
    }

    

`

// silver #94A1B2
// pink #EF4565
// greyblue Navbar #232E35
// green #2CB67D
// gris oscuro #72757E
// morado #7F5AF0