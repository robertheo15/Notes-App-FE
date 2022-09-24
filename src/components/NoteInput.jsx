import React from "react";
import PropTypes from "prop-types";
import NoteActionButton from "./NoteActionButton";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyEventHandler = this.onBodyEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <section className="add-new-page">
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            placeholder="Catatan rahasia"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Sebenarnya saya adalah ...."
            contentEditable
            onInput={this.onBodyEventHandler}
          />
        </div>
        <NoteActionButton onSubmit={this.onSubmitEventHandler} />
      </section>
    );
  }
}

NoteInput.propTypes = {
  title: PropTypes.string,
  Body: PropTypes.string,
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
