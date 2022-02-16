import { AbstractControl } from "@angular/forms";

export function equalsUserNamePasswordValidator(formGroup: AbstractControl) {
	const username = formGroup.get('userName')?.value ?? '';
	const password = formGroup.get('password')?.value ?? '';

	if (username.trim() + password.trim()) {
		return username !== password ? null : { equalsUserNamePassword: true };
	} else {
		return null;
	}
}
