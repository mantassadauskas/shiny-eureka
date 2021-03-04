export const disableScroll = (showModal: boolean) => {
  showModal ? document.body.style.overflow = 'hidden' :
              document.body.style.overflow = 'unset'
}