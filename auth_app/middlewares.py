from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed

def auth(get_response):
    def middleware(request):
        jwt_authenticator = JWTAuthentication()
        try:
            user_auth_tuple = jwt_authenticator.authenticate(request)
            if user_auth_tuple is not None:
                user, _ = user_auth_tuple
                request.user = user
            else:
                request.user = None
        except AuthenticationFailed:
            request.user = None

        response = get_response(request)
        return response

    return middleware
