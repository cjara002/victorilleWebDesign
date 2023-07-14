const ButtonGroup = (props) => {
    return(
        <>
                                <div className="float-center" style={{margin: 20}}>
                          <div
                            className="btn-group btn-group-toggle"
                            data-toggle="buttons"
                          >

                          {props.project === null ? (
                                  ""
                                ) : (
                                  <label className="btn btn-secondary">
                                    <a
                                      id="projectLinks"
                                      type="radio"
                                      name="options"
                                      href={props.project}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      PROJECT
                                    </a>
                                  </label>
                                )}

                          {props.code === null ? (
                                  ""
                                ) : (
                                  <label className="btn btn-secondary ">
                                    <a
                                      id="projectLinks"
                                      type="radio"
                                      name="options"
                                      href={props.code}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      CODE
                                    </a>
                                  </label>
                                )}

                          {props.video === null ? (
                                  ""
                                ) : (
                                  <label className="btn btn-secondary">
                                    <a
                                      id="projectLinks"
                                      type="radio"
                                      name="options"
                                      href={props.video}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      VIDEO
                                    </a>
                                  </label>
                                )}
                          </div>
                        </div>
        </>
    )
}

export default ButtonGroup;