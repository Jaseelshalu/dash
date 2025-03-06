import * as React from 'react'
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Camera, Twitter, Facebook, Instagram, Linkedin, Globe } from 'lucide-react';

const CreateAuthorForm = () => {
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    realName: '',
    penName: '',
    address: '',
    email: '',
    phoneNumber: '',
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    website: '',
    bio: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="">
        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold">Create Author</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Avatar section */}
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="h-40 w-40 bg-red-800">
                    <AvatarImage src={avatar} />
                    <AvatarFallback className="text-3xl">
                      {formData.realName ? formData.realName.charAt(0).toUpperCase() : 'A'}
                    </AvatarFallback>
                  </Avatar>
                  <Button type="button" variant="outline" className="flex items-center space-x-2">
                    <Camera size={16} />
                    <span>Upload Photo</span>
                  </Button>
                </div>

                {/* Form fields section */}
                <div className="md:col-span-2 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="realName">Real Name</Label>
                      <Input
                        id="realName"
                        name="realName"
                        placeholder="Enter real name"
                        value={formData.realName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="penName">Pen Name</Label>
                      <Input
                        id="penName"
                        name="penName"
                        placeholder="Enter pen name"
                        value={formData.penName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Enter address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <Label>Social Links</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Twitter size={18} className="text-blue-400" />
                        <Input
                          name="twitter"
                          placeholder="Twitter profile"
                          value={formData.twitter}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Facebook size={18} className="text-blue-600" />
                        <Input
                          name="facebook"
                          placeholder="Facebook profile"
                          value={formData.facebook}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Instagram size={18} className="text-pink-500" />
                        <Input
                          name="instagram"
                          placeholder="Instagram profile"
                          value={formData.instagram}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Linkedin size={18} className="text-blue-700" />
                        <Input
                          name="linkedin"
                          placeholder="LinkedIn profile"
                          value={formData.linkedin}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex items-center space-x-2 md:col-span-2">
                        <Globe size={18} className="text-gray-600" />
                        <Input
                          name="website"
                          placeholder="Personal website"
                          value={formData.website}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biography</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      placeholder="Enter author biography"
                      rows={5}
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="resize-none"
                    />
                  </div>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4 border-t pt-4">
            <Button variant="outline" type="button">Cancel</Button>
            <Button variant='secondary' type="submit" onClick={handleSubmit}>Create Author</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CreateAuthorForm;