import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { toast } from "react-toastify";


const onLogout = async () => {
  try {
    const auth = getAuth(app);
    await signOut(auth);
    toast.success("successfully loged out");
  } catch (error: any) {
    toast.error(error?.code);
  }
}
export default function Profile() {
  const auth = getAuth(app);
  console.log(auth?.currentUser?.photoURL);
  const photoUrl = auth?.currentUser?.photoURL || undefined;
  return (
    <div className="profile__box">
      <div className="flex__box-lg">
        <div>
          <img src={photoUrl} alt="" className="profile__image" />
        </div>

        <div>
          <div className="profile__email">{auth?.currentUser?.email}</div>
          <div className="profile__name">{auth?.currentUser?.displayName}</div>
        </div>
      </div>
      <div
        className="profile__logout"
        role="presentation"
        onClick={onLogout}
      >
        Logout
      </div>
    </div>
  );
}
