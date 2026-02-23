import AppSettingPage from "../setting/app";
import UserSettingPage from "../setting/user";

export default function User() {
  return (
    <div>
      <h1>Ini halaman user</h1>
      <AppSettingPage />
      <UserSettingPage />
    </div>
  );
}
