
// eslint-disable-next-line react/prop-types
function Modal({ title, description , closeModal, showModal}) {
    return (
        <div className={showModal ? "modal active" : "modal " }>
            <div className={ showModal ? "modal__content active" : "modal__content "}>
                <h2 className="modal__title">{title}</h2>
                {/* <figure className="modal__figure">
                <img className="modal__image" src="" alt="" />
            </figure> */}
                <h3 className="modal__subtitle">Explicación</h3>
                <p className="modal__description">{description}</p>
                <button className="modal__close" onClick={() => closeModal() }>
                    <i className="ri-close-line"></i>

                </button>

            </div>
        </div>
    )
}

export default Modal