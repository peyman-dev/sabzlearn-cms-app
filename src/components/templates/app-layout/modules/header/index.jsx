import React from "react";
import ProfileDropdown from "./fragments/profile-dropdown";
import Notifications from "./fragments/notifications";
import Divider from "../../../../ui/divider";
import SearchInput from "./fragments/search-input";

export default function Header() {
  return (
    <div className="w-full h-20 border-b primary-border-color flex items-center justify-between *:flex *:items-center *:gap-3">
      <div>
        <SearchInput />
      </div>
      <div>
        <Notifications />
        <Divider />

        <ProfileDropdown />
      </div>
    </div>
  );
}
