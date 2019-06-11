from django.contrib import admin

from core.admin import ReadOnlyModelAdmin
from users.models import User


class CustomUserAdmin(ReadOnlyModelAdmin):
    model = User
    list_display = ["username", "email", "is_staff"]


admin.site.register(User, CustomUserAdmin)
