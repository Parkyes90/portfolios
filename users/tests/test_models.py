from django.test import TestCase

from users import models


class ModelTests(TestCase):
    def test_create_user_with_name_successful(self):
        """Test creating a new user with an email is successful"""
        kwargs = {"username": "parkyes90", "password": "123456"}

        user = models.User.objects.create_user(**kwargs)
        self.assertEqual(kwargs["username"], user.username)
        self.assertTrue(user.check_password(kwargs["password"]))
