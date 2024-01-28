
import { Meteor } from 'meteor/meteor';


Meteor.methods({
    'users.updateRole'(userId,role){
        if(!this.userId || !Roles.userIsInRole(this.userId,'admin')){
            throw new Meteor.Error('not-authorized');
        }
        Users.update(userId,{$set:{'profile.role':role}});
    },
})
