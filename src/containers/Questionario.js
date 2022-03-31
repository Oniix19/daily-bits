import React, { Component } from 'react'
import { questions } from '../helpers/Questions'
import { Input } from '../styles/StyleD'

export default class Questionario extends Component {
    constructor() {
        super()
        this.state = {
            numberQuestion: 0,
            question: {
                question: "",
                a: "",
                b: "",
                c: "",
                d: "",
                correct: ""
            },
            score: 0,
            answerSelect: ""
        }
    }

    componentDidMount() {
        const currentQuizData = questions[this.state.numberQuestion]

        this.setState({
            question: {
                question: currentQuizData.question,
                a: currentQuizData.a,
                b: currentQuizData.b,
                c: currentQuizData.c,
                correct: currentQuizData.correct
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
        if (this.state.answerSelect === this.state.question.correct) {
            this.setState({
                score: this.state.score + 1,
            })
        }
        if (this.state.numberQuestion < questions.length) {
            this.componentDidMount()
        } else {
            console.log(this.state.score);
        }
    }

    onChanged = (e) => {
        this.setState({
            answerSelect: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className='questionario'>
                {/* <progress max="100" value=""></progress> */}

                <div className='question'>
                    <img className='quesImg' src='https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648523969/Daily-base/images/Property_1_4_ko2keo.png' />

                    <h3 className='quesH1'>{this.state.question.question}</h3>
                </div>

                <form className='quesForm'>
                    <div className='quesDiv'>
                        <Input className='quesDivResp'
                            type="radio"
                            label={this.state.question.a}
                            value={this.state.question.a}
                            name={'respuestas'}
                            id={`respuesta1`}
                            onChange={this.onChanged}
                        />
                        <Input className='quesDivResp'
                            type="radio"
                            label={this.state.question.b}
                            value={this.state.question.b}
                            name={'respuestas'}
                            id={`respuesta2`}
                            onChange={this.onChanged}
                        />
                        <Input className='quesDivResp'
                            
                            label={this.state.question.c}
                            value={this.state.question.c}
                            name={'respuestas'}
                            id={`respuesta3`}
                            onChange={this.onChanged}
                            type="radio"
                        />
                    </div>
                    <button className='quesBtn' type='submit' onClick={() => { this.setState({ numberQuestion: this.state.numberQuestion + 1 }) }}>VALIDAR</button>
                </form>
            </div>
        )
    }
}