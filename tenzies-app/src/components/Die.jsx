export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "tomato",
  };

  const face = () => {
    switch (props.value) {
      case 1:
        return (
          <div
            className="first-face die"
            style={styles}
            onClick={props.holdDice}
          >
            <span className="dot"> </span>
          </div>
        );
      case 2:
        return (
          <div
            className="second-face die"
            style={styles}
            onClick={props.holdDice}
          >
            <span className="dot"> </span>
            <span className="dot"> </span>
          </div>
        );
      case 3:
        return (
          <div
            className="third-face die"
            style={styles}
            onClick={props.holdDice}
          >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        );
      case 4:
        return (
          <div
            className="fourth-face die"
            style={styles}
            onClick={props.holdDice}
          >
            <div className="column">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="column">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        );

      case 5:
        return (
          <div
            className="fifth-face die"
            style={styles}
            onClick={props.holdDice}
          >
            <div className="column">
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            <div className="column" style={styles} onClick={props.holdDice}>
              <span className="dot"></span>
            </div>

            <div className="column" style={styles} onClick={props.holdDice}>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        );

      case 6:
        return (
          <div
            className="fourth-face die"
            style={styles}
            onClick={props.holdDice}
          >
            <div className="column">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <div className="column" style={styles} onClick={props.holdDice}>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        );
    }
  };

  return face();
}
