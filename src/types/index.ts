
export type UserRole = 'customer' | 'admin' | 'manager' | 'agent';


export interface User {
  uid: string;
  email: string;
  displayName: string | null;
  role: UserRole;
  phoneNumber?: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  
  
  customerData?: CustomerData;
  agentData?: AgentData;
  managerData?: ManagerData;
}


export interface CustomerData {
  addresses: Address[];
  totalOrders: number;
  preferredPaymentMethod?: string;
}
 
export interface AgentData {
  vehicleType: 'bike' | 'car' | 'truck';
  licenseNumber: string;
  currentLocation?: {
    lat: number;
    lng: number;
  };
  isOnDuty: boolean;
  rating: number;
  totalDeliveries: number;
  assignedRegion: string;
}

export interface ManagerData {
  assignedRegions: string[];
  teamSize: number;
  departmentId: string;
}


export interface Address {
  id: string;
  label: string; 
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userData: Partial<User>) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  updateUserProfile: (userData: Partial<User>) => Promise<void>;
}