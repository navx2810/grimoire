/* SystemJS module definition */
declare var module: NodeModule;
type LoginStatusCB = {
	status: string
	authResponse: {
		accessToken: string
		userID: string
		signedResponse: string
		expiresIn: number
	}
}

declare var FB: {
	getLoginStatus(callback: (LoginStatusCB) => void)
	api(path: string, callback: (any) => void)
	login(callback: (LoginStatusCB) => void, options: { scope: string })
}
interface NodeModule {
	id: string;
}
