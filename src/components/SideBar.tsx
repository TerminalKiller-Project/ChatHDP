import s from '../css/SideBar.module.css'

export default function SideBar() {
  return (
    <div className={s.sideBarCont}>
      <button className={s.newChatButton}>+ New chat</button>
    </div>
  );
}