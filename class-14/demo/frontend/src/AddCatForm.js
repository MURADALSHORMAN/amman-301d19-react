import React, { Component } from 'react'

export class AddCatForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.addCat(e)}>
                    <fieldset>
                        <legend>Creat a new Cat Form</legend>
                        <label>Name of the cat</label>
                        <input onChange={(e) => this.props.updateCatName(e)} type='text' />

                        <label>Breed of the cat</label>
                        <input onChange={(e) => this.props.updateCatBreed(e)} type='text' />

                        <input type="submit" value="add Cat" />
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default AddCatForm
